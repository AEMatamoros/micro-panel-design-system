import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Avatar, AvatarFallback } from '../ui/avatar';

describe('Avatar Component', () => {
    // test('renders Avatar with image', () => {
    //     render(
    //         <Avatar>
    //             <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
    //             <AvatarFallback>AB</AvatarFallback>
    //         </Avatar>
    //     );

    //     const avatarImage = screen.getByAltText('Avatar');
    //     expect(avatarImage).toBeInTheDocument();
    //     expect(avatarImage).toHaveAttribute('src', 'https://github.com/shadcn.png');
    // });

    test('renders Avatar with fallback text when image is not provided', () => {
        render(
            <Avatar>
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>
        );

        expect(screen.getByText('AB')).toBeInTheDocument();
    });
});
