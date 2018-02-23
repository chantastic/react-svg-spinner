import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer"
import Spinner from "."

Enzyme.configure({ adapter: new Adapter() });

test("Spinner renders", () => {
  const spinner = shallow(<Spinner />)
})

test("no prop snapshot", () => {
  const component = renderer.create(<Spinner />)

	let tree = component.toJSON()

	expect(tree).toMatchSnapshot();
})
