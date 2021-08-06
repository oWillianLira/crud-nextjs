import Client from "../../core/Client";
import ClientRepo from "../../core/ClientRepo";
import firebase from "../config";

export default class ClientsCollection implements ClientRepo {
  #converter = {
    // Turning the clients data into a JSON
    toFirestore(client: Client) {  
      return {
        name: client.name,
        age: client.age
      }
    },
    // Turning the clients data into a Class
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) : Client {
      const data = snapshot.data(options)
      return new Client(data.name, data.age, snapshot?.id)
    }
  }

  async save(client: Client): Promise<Client> {
    if(client?.id) {
      // If there's a cliente selected, it'll update
      await this.collection().doc(client.id).set(client)
      return client
    } else {
      // If there isn't a cliente selected, it'll add
      const docRef = await this.collection().add(client)
      const doc = await docRef.get()
      return (doc).data()
    }
  }

  async delete(client: Client): Promise<void> {
    return this.collection().doc(client.id).delete();
  }

  async getAll(): Promise<Client[]> {
    const query = await this.collection().get()
    return query.docs.map(doc => doc.data()) ?? [];
  }

  private collection() {
    // getting the clients collection, with a converter
    return firebase.firestore().collection('clients').withConverter(this.#converter)
  }
}