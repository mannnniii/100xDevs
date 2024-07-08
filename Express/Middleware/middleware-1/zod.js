const zod = require('zod')

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })

  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "aman@gmail.com",
  password: "977300aman"
});


// {
//  email => string => should look like email
// password => shouls have 8 letters

// }