import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import Cell, { CellProps } from "./Cell";

const meta: Meta<typeof Cell> = {
  title: "Grid/Cell",
  component: Cell,
  argTypes: {
    coords: { defaultValue: [1, 1] },
  },
};

export default meta;
type Story = StoryObj<CellProps>;

export const CellClosed: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 10,
  },
};

export const CellIsEmpty: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 0,
  },
};

export const CellWithBomb: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 9,
  },
};

export const CellWithFlag: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 11,
  },
};

export const CellWeakFlag: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 12,
  },
};

export const CellWith1: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 1,
  },
};

export const CellWith3: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 3,
  },
};

export const CellWith5: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 5,
  },
};

export const CellWith8: Story = {
  render: (args: any) => <Cell {...args} />,
  args: {
    children: 8,
  },
};
