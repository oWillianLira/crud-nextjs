import { useEffect, useState } from 'react';
import Client from '../core/Client';
import ClientsCollection from '../backend/db/ClientsCollection';
import ClientRepo from '../core/ClientRepo';
import useViewOptions from './useViewOptions';

export default function useClients() {
  const repo: ClientRepo = new ClientsCollection();

  const { formView, tableView, showForm, showTable } = useViewOptions();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>();

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    showForm();
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
    showForm();
  }

  return {
    client,
    clients,
    ClientsCollection,
    newClient,
    saveClient,
    deletedClient,
    selectedClient,
    getAll,
    tableView,
    showTable,
  };
}
