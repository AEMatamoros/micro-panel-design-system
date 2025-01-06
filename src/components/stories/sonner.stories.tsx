import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../ui/button';
import { toast, SonnerToaster } from '../ui/sonner';

const theme = import.meta.env.VITE_APP_THEME;

const promise = () =>
    new Promise(resolve => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

const meta: Meta<typeof SonnerToaster> = {
    title: 'Base/Sonner',
    component: SonnerToaster,
    tags: ['autodocs'],
    args: {
        position: 'bottom-right',
        expand: false,
        richColors: false
    },
    argTypes: {
        position: {
            description: 'Swipe direction changes depending on the position.',
            control: 'select',
            options: [
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right'
            ],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'bottom-right'
                }
            }
        },
        expand: {
            description:
                'You can change the amount of toasts visible through the visibleToasts prop.',
            control: 'boolean',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        richColors: {
            description: 'The property adds color depending on the types.',
            control: 'boolean',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'false'
                }
            }
        }
    },
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof SonnerToaster>;

export const Base: Story = {
    render: ({ expand, richColors, position, ...props }) => (
        <div className="max-h-5 min-h-72">
            <SonnerToaster
                position={position}
                richColors={richColors}
                expand={expand}
            />
            <Button
                {...props}
                className="m-1"
                onClick={() => toast('My first toast')}
            >
                toast default
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() =>
                    toast.message('My first toast message', {
                        description: 'Monday, January 3rd at 6:00pm'
                    })
                }
            >
                toast description
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() => toast.success('My first toast succes')}
            >
                toast succes
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() => toast.info('My first toast info')}
            >
                toast info
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() => toast.warning('My first toast warning')}
            >
                toast warning
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() => toast.error('My first toast error')}
            >
                toast error
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() =>
                    toast.success('My first toast action', {
                        action: {
                            label: 'Undo',
                            onClick: () => console.log('Undo')
                        }
                    })
                }
            >
                toast action
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() =>
                    toast.promise(promise, {
                        loading: 'Loading...',
                        success: `toast has been added`,
                        error: 'Error'
                    })
                }
            >
                toast promise
            </Button>
            <Button
                {...props}
                className="m-1"
                onClick={() =>
                    toast(<div>A custom toast with default styling</div>)
                }
            >
                toast custom
            </Button>
        </div>
    )
};
