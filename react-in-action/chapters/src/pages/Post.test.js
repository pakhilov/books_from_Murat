jest.mock("../../src/shared/http");

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import * as API from "../../src/shared/http";

import { SinglePost } from "../../src/pages/post";

describe("Single post page", () => {
  test("should render the right components", () => {
    // [9.4]
    // the prop is an object,
    // and we tell exactly what it is from <Post id={this.props.params.postId} />
    const props = {
      params: {
        postId: "id"
      }
    };
    // mock API related calls. This is called at load, so needs to be mocked.
    API.fetchPost = jest.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve()
      });
    });

    const component = shallow(<SinglePost {...props} />);
    expect(component.find('Link').length).toEqual(1);
    expect(component.find('Post').length).toEqual(1);
    expect(component.find('Ad').length).toEqual(1);
  });

  test('snapshot', () => {
    const props = {
        params: {
            postId: 'id'
        }
    };
    const component = renderer.create(<SinglePost {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
});