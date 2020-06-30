import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Colors from './../constants/colors';
import Card from './../components/Card';

const GameOverScreen = ({guessRounds, userNumber, onStartGame}) => {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.text}>Game Over!</Text>
        <Text style={styles.text}>
          I won! It only took me {guessRounds}
          {guessRounds > 1 ? ' tries' : ' try'}!
        </Text>
        <Text style={styles.text}>The number was: {userNumber}</Text>
        <Button title="New Game" onPress={onStartGame} color={Colors.primary} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 36,
    marginVertical: 86,
    minHeight: 300,
  },
  text: {
    fontSize: 24,
    height: 28,
    fontWeight: '700',
    marginVertical: 14,
  },
});

export default GameOverScreen;
