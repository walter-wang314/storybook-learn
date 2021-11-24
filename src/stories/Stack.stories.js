/* eslint-disable import/no-anonymous-default-export */
import Stack from '../components/Stack';

export default {
  title: 'Layout/Stack Example',
  component: Stack,
  argTypes: {
    numberOfChildren: {
      type: 'number',
      defaultValue: 4,
    },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((key) => (
      <div
        key={key}
        style={{
          height: '50px',
          width: '50px',
          background: 'gray',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {key + 1}
      </div>
    ))}
  </Stack>
);

export const HorizontalNoWrapStack = Template.bind({});
HorizontalNoWrapStack.args = {
  numberOfChildren: 30,
  direction: 'row',
  wrap: false,
  spacing: 5,
};

export const VerticalStack = Template.bind({});
VerticalStack.args = {
  numberOfChildren: 20,
  direction: 'column',
  wrap: true,
};

export const BigSpaceHorizontalNoWrapStack = Template.bind({});
BigSpaceHorizontalNoWrapStack.args = {
  numberOfChildren: 30,
  direction: 'row',
  wrap: true,
  spacing: 20,
};
