import admin from 'firebase-admin'

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      projectId: process.env.FIREBASE_PROJECT_ID
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  })
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack)
  }
}

interface FirebaseInstance {
  database: admin.database.Database,
  storage: admin.storage.Storage,
}

export const firebaseInstance: FirebaseInstance = {
  database: admin.database(),
  storage: admin.storage()
}

export default firebaseInstance.database
