import { View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Wizard } from 'react-native-ui-lib';
import Information from './Information';
import Done from './Done';
import Confirm from './Confirm';
import { PaymentScreenProps } from '../../navigator/type';
import { useTranslation } from 'react-i18next';

export default function Payment({ navigation, route }: PaymentScreenProps) {
  const { t, i18n } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [completedStepIndex, setCompletedStepIndex] = useState<number>();

  const onActiveIndexChanged = (index: number) => {
    setActiveIndex(index);
  };

  function getStepState(index: number) {
    let state = Wizard.States.DISABLED;
    if (completedStepIndex && completedStepIndex > index - 1) {
      state = Wizard.States.COMPLETED;
    } else if (activeIndex === index) {
      state = Wizard.States.ENABLED;
    }
    return state;
  }

  const renderCurrentStep = () => {
    switch (activeIndex) {
      case 0:
      default:
        return (
          <Information
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setCompletedStepIndex={setCompletedStepIndex}
          />
        );
      case 1:
        return (
          <Confirm
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setCompletedStepIndex={setCompletedStepIndex}
          />
        );
      case 2:
        return <Done navigation={navigation} route={route} />;
    }
  };

  return (
    <View style={styles.container}>
      <Wizard
        activeIndex={activeIndex}
        onActiveIndexChanged={onActiveIndexChanged}
        containerStyle={styles.stepper}>
        <Wizard.Step state={getStepState(0)} label={t('Fill in information')} />
        <Wizard.Step state={getStepState(1)} label={t('Confirm booking information')} />
        <Wizard.Step state={getStepState(2)} label={t('Success')} />
      </Wizard>
      {renderCurrentStep()}
    </View>
  );
}
