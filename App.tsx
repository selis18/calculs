import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { calculateBodySurfaceArea, calculateDosage, calculateOndansetron, calculateMannitol, calculateHydrationRate, calculatePotassiumChloride, calculateCalciumGluconate, calculateMagnesiumSulfate } from './Calculations';
import { createProvider } from "@gluestack-ui/provider"
import { config } from "@gluestack-ui/config"
import { StyledProvider } from "@gluestack-style/react"
import { FormControl, Heading, VStack } from "@gluestack-ui/themed";

export const Provider = createProvider({
  StyledProvider,
})

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    const bodySurfaceArea = calculateBodySurfaceArea(heightValue, weightValue);
    const dosageArray = calculateDosage(bodySurfaceArea);
    const etoposideDosage = dosageArray[0];
    const cisplatinDosage = dosageArray[1];
    const ifosfamideDosage = dosageArray[2];
    const uromitexanDosage = dosageArray[3];
    const ondansetronDosage = calculateOndansetron(weightValue);
    const mannitolDosage = calculateMannitol(weightValue);
    const hydrationRate = calculateHydrationRate(bodySurfaceArea);
    const potassiumChlorideDosage = calculatePotassiumChloride(bodySurfaceArea);
    const calciumGluconateDosage = calculateCalciumGluconate(bodySurfaceArea);
    const magnesiumSulfateDosage = calculateMagnesiumSulfate(bodySurfaceArea);

    setResult(`
      Результаты расчета:
      Площадь поверхности тела: ${bodySurfaceArea.toFixed(2)} м2
      Дозировка препаратов:
      Этопозид: ${etoposideDosage.toFixed(2)} мг
      Цисплатин: ${cisplatinDosage.toFixed(2)} мг
      Ифосфамид: ${ifosfamideDosage.toFixed(2)} мг
      Уромитексан: ${uromitexanDosage.toFixed(2)} мг
      Дозировка ондансетрона: ${ondansetronDosage.toFixed(2)} мг
      Дозировка маннитола: ${mannitolDosage.toFixed(2)} гр
      Гидратация: ${hydrationRate.toFixed(2)} мл/сут
      Дозировка калия хлорида: ${potassiumChlorideDosage.toFixed(2)} мл/сут
      Дозировка кальция глюконата: ${calciumGluconateDosage.toFixed(2)} мл/сут
      Дозировка магния сульфата: ${magnesiumSulfateDosage.toFixed(2)} мл/сут `); };

      return (
        <Provider config={config}>
        <FormControl
          p="$4"
          borderWidth="$1"
          borderRadius="$lg"
          borderColor="$borderLight300"
          sx={{
            _dark: {
              borderWidth: "$1",
              borderRadius: "$lg",
              borderColor: "$borderDark800",
            },
          }}
          >
        <VStack space="xl">
        <Heading lineHeight="$xl ">Расчет дозировок и площади поверхности тела</Heading>
        <VStack space="xs">
        <Text>Рост (см):</Text>
        <TextInput
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
        />
        </VStack>
        <VStack space="xs">
        <Text>Вес (кг):</Text>
        <TextInput
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
          
        />
        </VStack>
        <Button title="Расчет" onPress={calculate} />
        <Text>{result}</Text>
        </VStack> 
        </FormControl> 
        
      </Provider>
      );
      }
