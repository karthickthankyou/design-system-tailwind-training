import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FontWeight, { IFontWeightProps} from './FontWeight';

export default {
    title: 'components/typography/FontWeight',
    component: FontWeight,
} as Meta;

const Template: Story<IFontWeightProps> = (args) => <FontWeight {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
