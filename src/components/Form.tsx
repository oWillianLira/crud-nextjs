import { useState } from 'react';
import Client from '../core/Client';
import Input from './Input';
import Button from './Button';

interface FormProps {
  client: Client;
  clientChange?: (client: Client) => void;
  cancel?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);
  return (
    <div>
      {id ? <Input text="Id" value={id} readOnly></Input> : false}
      <Input text="Name" value={name} handle={setName}></Input>
      <Input text="Age" type="number" value={age} handle={setAge}></Input>
      <div className="flex justify-end mt-5">
        <Button className="mr-2" color="blue" onClick={() => props.clientChange?.(new Client(name, +age, id))}>
          {id ? 'Update' : 'Save'}
        </Button>
        <Button color="gray" onClick={props.cancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
