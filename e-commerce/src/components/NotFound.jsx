import React from 'react'

export function NotFound() {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p class="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <a href="/" className='btn btn-primary '>Go home </a>
                </div>
            </div>

        </div>
    )
}
export default NotFound;