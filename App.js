// App.js

import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const FortuneCookie = () => {
  const [frase, setFrase] = useState('');
  const [isBroken, setIsBroken] = useState(false);

  const frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte, há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "O riso é a menor distância entre duas pessoas.",
  ];

  const quebrarBiscoito = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFrase(frases[randomIndex]);
    setIsBroken(true);
  };

  const reiniciarBiscoito = () => {
    setFrase('');
    setIsBroken(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          isBroken
            ? require('./assets/images/quebrado.png')
            : require('./assets/images/inteiro.png')
        }
        style={styles.image}
      />
      {isBroken && <Text style={styles.frase}>{frase}</Text>}
      <Button
        title={isBroken ? "Reiniciar Biscoito" : "Quebrar o Biscoito"}
        onPress={isBroken ? reiniciarBiscoito : quebrarBiscoito}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5E1',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  frase: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    color: '#333333',
    fontStyle: 'italic',
  },
});

export default FortuneCookie;
