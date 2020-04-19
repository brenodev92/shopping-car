export const ADD_CAR = "ADD_CAR [CAR] NOVO CARRO";

export function addCar(car) {
  return {
    type: ADD_CAR,
    car,
  };
}
