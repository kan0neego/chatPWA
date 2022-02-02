const AddMessage = (prop) => {
  let input;

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          prop.dispatch('Me', input.value)
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
};

export default AddMessage;