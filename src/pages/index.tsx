import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import useClients from '../hooks/useClients';

export default function Home() {
  const {
    client,
    clients,
    ClientsCollection,
    newClient,
    selectedClient,
    deletedClient,
    saveClient,
    tableView,
    showTable,
  } = useClients();

  return (
    <div
      className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-400 to-blue-500 
      text-gray-50
    `}
    >
      <Layout title="Registration">
        {tableView ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4 flex" color="green" onClick={newClient}>
                + New Player
              </Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} />
          </>
        ) : (
          <Form client={client} cancel={() => showTable()} clientChange={saveClient} />
        )}
      </Layout>
    </div>
  );
}
