import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    try {
      const validateResponse = await fetch(
        `http://localhost:3000/validar/${name}`
      )

      if (validateResponse.status === 400) {
        const validateText = await validateResponse.text()
        setError(validateText)
        return
      }

      if (validateResponse.status !== 200) {
        setError('Error al validar el nombre.')
        return
      }

      const saludoResponse = await fetch(`http://localhost:3000/hola/${name}`)

      if (saludoResponse.status !== 200) {
        setError('Error al obtener el saludo.')
        return
      }

      const saludoText = await saludoResponse.text()
      setMessage(saludoText)
    } catch (err) {
      setError('Error al comunicarse con el servidor.')
    }
  }

  useEffect(() => {
    if (message || error) {
      const timeout = setTimeout(() => {
        setMessage('')
        setError('')
      }, 5000)
      return () => clearTimeout(timeout)
    }
  }, [message, error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 p-6 rounded shadow-md w-full max-w-sm min-h-48 text-center"
      >
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Validar y Saludar
        </button>
        {error && <p className="text-error mt-4 text-center">{error}</p>}
        {message && <p className="text-success mt-4 text-center">{message}</p>}
      </form>
    </div>
  )
}

export default App
