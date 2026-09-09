import './form.css'

function Form({ formData }) {
  return (
    <section className="form">

      <form action="#" className="form-body">

        <h2 className="form-header">
          {formData.title}
        </h2>

        {formData.fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}

        <input
          type="checkbox"
          id={formData.checkbox.id}
        />

        <label htmlFor={formData.checkbox.id}>
          {formData.checkbox.label}
        </label>

        <button className="submit">
          {formData.buttonText}
        </button>

      </form>

    </section>
  )
}

export default Form