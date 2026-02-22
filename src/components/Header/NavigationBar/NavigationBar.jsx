import { UserMenu } from './UserMenu/UserMenu';

export const NavigationBar = ({ user }) => {
    return (
        <nav>
            <h3>Navigation</h3>
            < UserMenu />
        </nav>
    );
}