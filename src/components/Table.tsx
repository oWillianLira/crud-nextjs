import Client from '../core/Client';
import { IconDelete, IconEdit } from './Icons';

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.deletedClient || props.selectedClient;

  function renderHead() {
    return (
      <tr>
        <th className="text-left py-2 px-4">ID</th>
        <th className="text-left py-2 px-4">Name</th>
        <th className="text-left py-2 px-4">Age</th>
        {showActions ? <th className="text-left py-2 px-4" title="Actions"></th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id} className={`${i % 2 === 0 ? '' : 'bg-gray-100'}`}>
          <td className="text-left py-2 px-4">{client.id}</td>
          <td className="text-left py-2 px-4">{client.name}</td>
          <td className="text-left py-2 px-4">{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.selectedClient ? (
          <button
            onClick={() => props.selectedClient?.(client)}
            className={`
              flex justify-center items-center
              text-blue-400 rounded-full p-2 m-1
              hover:bg-gray-200 hover:text-blue-500
            `}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.deletedClient ? (
          <button
            onClick={() => props.deletedClient?.(client)}
            className={`
              flex justify-center items-center
              text-red-400 rounded-full p-2 m-1
              hover:bg-gray-200 hover:text-red-500
            `}
          >
            {IconDelete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <div className="overflow-x-auto rounded-md ">
      <table className="w-full rounded-md overflow-hidden">
        <thead
          className={`
          bg-gradient-to-r from-purple-400 to-blue-500
          text-gray-100
        `}
        >
          {renderHead()}
        </thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  );
}
