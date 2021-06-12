import React from 'react'

function Footer() {
  return (
    <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
            <p class="text-muted text-center"> Copyright &copy; {(new Date().getFullYear())} Cool Cow Facts</p>
        </div>
    </footer>
  )
}

export default Footer