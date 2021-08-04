import Button from '../components/Button';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {
  const clients = [
    new Client('Ibrahimovic', 39, '1'),
    new Client('Giroud', 34, '2'),
    new Client('Bennacer', 26, '3'),
    new Client('Tomori', 24, '4'),
  ];

  function selectedClient(client: Client) {
    alert(`Edit: ${client.name}`);
  }

  function deletedClient(client: Client) {
    alert(`Delete: ${client.name}`);
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-400 to-blue-500 
      text-gray-50
    `}
    >
      <Layout title="Registration">
        <div className="flex justify-end">
          <Button className="mb-4 flex" cor="green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            New Player
          </Button>
        </div>
        <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
      </Layout>
    </div>
  );
}
