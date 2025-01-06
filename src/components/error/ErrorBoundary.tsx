import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    errorComponent: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update State to show error component
        return { hasError: true };
    }

    componentDidCatch() {
        // Can Register error
        console.error('Error:');
    }

    render() {
        if (this.state.hasError) {
            return this.props.errorComponent;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
