import React from 'react';
import {render, screen, waitFor, fireEvent} from '@testing-library/react';
import  App from '../app';
import '@testing-library/jest-dom/extend-expect';





test('loads the app and sh', async ()=> {
    const { getByText, getByTestId, asFragment } = render(
        <App />
      );
    // render(<App/>);
    const name = await waitFor(()=> screen.getByTestId("data"));
    // expect(name).toHaveTextContent('fake thing 1');
    console.log(name)
    expect(getByTestId('data').textContent).toBe('')

});


it("increments count", () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText("GO!"));
    expect(getByTestId("data")).toHaveTextContent("fake thing 1");
  });


