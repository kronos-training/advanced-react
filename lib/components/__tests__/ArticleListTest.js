import React from 'react';
import { shallow, configure } from 'enzyme';
import ArticleList from '../ArticleList';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList {...testProps} />
    );
    // console.log(wrapper.node.props.children);
    // expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});

