import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export const MyDocument = ({ showBody }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: 10,
      display: 'flex',
    },
    header: {
      fontSize: 24,
      marginBottom: 10,
    },
    body: {
      fontSize: 16,
      color: '#666',
      marginTop: 10,
    },
    footer: {
      fontSize: 12,
      color: '#999',
      marginTop: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>My Header</Text>
        </View>
        {showBody && (
          <View style={styles.body}>
            <Text>My Body</Text>
            <Text>This is the body of my component.</Text>
          </View>
        )}
        <View style={styles.footer}>
          <Text>My Footer</Text>
        </View>
      </Page>
    </Document>
  );
};



