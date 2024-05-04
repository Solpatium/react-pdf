import React from 'react';
import {
  Document,
  Font,
  Text,
  Page,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';

import Quijote1 from '../../public/quijote1.jpg';
import Quijote2 from '../../public/quijote2.png';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const Quixote = () => (
  <Document>
    <Page style={styles.body}>
      <Text 
        style={{width: 200, fontSize:30}} 
        fixed 
        hyphenationCallback={word => {
        	const parts = word.split("-");
			return parts.map( (part, index) => {
              if (index === parts.length -1) {
                return part;
              }
              return part + "-";
            })
        }}>
        test-test test-test test-test
      </Text>
    </Page>
  </Document>
);

export default Quixote;
