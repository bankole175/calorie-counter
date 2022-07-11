export function Navbar() {
    return (
        <div>
            <h3 className="mb-1">Hello <span className="text-capitalize h3">{import.meta.env.VITE_APP_USER}</span>,</h3>
            <p className="text-muted">Count nutrients not calories 🙄!</p>
        </div>
    );
}
