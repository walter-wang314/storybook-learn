/* eslint-disable import/no-anonymous-default-export */
import Button from '../components/Button';

export default {
  title: 'Components/Button Example',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <Button {...args} />;

export const RedButton = Template.bind({});

RedButton.args = {
  label: 'press me!',
  backgroundColor: 'pink',
  size: 'md',
};
