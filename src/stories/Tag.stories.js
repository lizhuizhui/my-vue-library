import { fn } from '@storybook/test';
import Tag from '../components/Tag.vue';

const meta = {
  title: 'Example/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderRadius: { control: 'number' },
    label: { control: 'text' },
  },
};

export default meta;


export const Small = {
  args: {
    label: 'small',
    size: 'small',
  },
};

export const Medium = {
  args: {
    label: 'Tag',
    size: 'medium',
  },
};

export const Large = {
  args: {
    label: 'Large',
    size: 'large',
  },
};