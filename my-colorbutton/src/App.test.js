import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has coorect initial color', () => {
  render(<App />);

  // find an element with role of button and text of "Change to bluer"
 const colorButton = screen.getByRole('button', {name: "Change to blue" })

 // experct the background color to be red
 expect(colorButton).toHaveStyle({backgroundColor: 'red'})

 //click the button
 fireEvent.click(colorButton);

 //expect to change button color to be Blue
 expect(colorButton).toHaveStyle({backgroundColor: "blue"})

 // expect to button text to be "Change to red"
 expect(colorButton.textContent).toBe("Change to red")
});

test('initial conditions', () => {
  render(<App/>);

  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();




  //on click checkbox to make unable colorButton
  fireEvent.click(checkbox)

  //expext unable check box
  expect(colorButton).toBeDisabled();

  

  //click check box to make colorButton
  fireEvent.click(checkbox)

 //expext able button
  expect(colorButton).toBeEnabled();
  


})

