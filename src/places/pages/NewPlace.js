import React, { useCallback, useReducer } from "react";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../util/validators";

import "./NewPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        // console.log(state.inputs[inputId], inputId);
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    //Implementar lógica para backend dps
    console.log(formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Título"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Por favor digite um título válido"
        onInput={inputHandler}
      ></Input>
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Descrição"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Por favor digite uma descrição válida (pelo menos 5 caracteres)"
        onInput={inputHandler}
      ></Input>
      <Input
        id="address"
        element="textarea"
        type="text"
        label="Endereço"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Digite um endereço válido."
        onInput={inputHandler}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        ADICIONAR LUGAR
      </Button>
    </form>
  );
};

export default NewPlace;
