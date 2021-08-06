import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import ClientRepo from '../core/ClientRepo';
import ClientsCollection from '../backend/db/ClientsCollection';

export default function Home() {
  const repo: ClientRepo = new ClientsCollection();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>();
  const [view, setView] = useState<'table' | 'form'>('table');

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      setView('table');
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    setView('form');
  }

  async function deletedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty);
    setView('form');
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
        {view === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4 flex" color="green" onClick={newClient}>
                + New Player
              </Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} />
          </>
        ) : (
          <Form client={client} cancel={() => setView('table')} clientChange={saveClient} />
        )}
      </Layout>
    </div>
  );
}
