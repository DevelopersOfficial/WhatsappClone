import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Text, View} from 'react-native';
import Contacts from 'react-native-contacts';

export default function AllContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const requestContactsPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'App needs access to your contacts',
          },
        );
        console.log(granted, 'TETST');

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Access contacts
          Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
              console.warn('Permission to access contacts was denied');
            } else {
              setContacts(contacts);
              console.log(contacts, 'TETST');
            }
          });
        } else {
          console.warn('Contacts permission denied');
        }
      } catch (err) {
        console.error(err);
      }
    };

    requestContactsPermission();
  }, []);
  return (
    <View>
      <Text>Contacts</Text>
    </View>
  );
}
