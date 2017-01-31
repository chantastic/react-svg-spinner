import React from "react"
import {shallow} from "enzyme"
import renderer from "react-test-renderer"
import Spinner from "."

test("Spinner renders", () => {
  const spinner = shallow(<Spinner />)
})

test("no prop snapshot", () => {
  const component = renderer.create(<Spinner />)

	let tree = component.toJSON()

	expect(tree).toMatchSnapshot();
})
