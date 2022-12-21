import functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = initializeApp(); // uses current Firebase project’s config
const firestore = getFirestore(app);

export const helloWorld = functions.https.onRequest((req, res) => {
  functions.logger.info('Hello logs!', { structuredData: true });

  res.send('Hello from Firebase!');
});

export const getNumberOfHeroes = functions.https.onCall(
  async (data, context) => {
    try {
      let heroCollRef = firestore.collection('heroes');
      let querySnap = await heroCollRef.get();
      functions.logger.log(`request from: ${context.auth.token.email}`);
      functions.logger.log(`num of heroes: ${querySnap.size}`);
      return { numHeroes: querySnap.size };
    } catch (ex) {
      functions.logger.info(`ERROR: ${ex.message}`);
      throw ex;
    }
  }
);
