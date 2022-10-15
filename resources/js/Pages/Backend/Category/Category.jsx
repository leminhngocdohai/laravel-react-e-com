import React from 'react';

export default function Category() {
    return (
        <>
            <div>
                <h1>Category Admin</h1>
                <form action="/action_page.php">
                    <label htmlFor="fname">Name Catgory</label>
                    <br />
                    <input type="text" id="fname" name="fname" defaultValue="John" />
                    <br />
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>
        </>
    );
}
