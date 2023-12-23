greetings = [
  "Good Morning!",
  "Good Afternoon!",
  "Hello, how are you?",
  "Hi there!",
  "Hey, nice to see you!"
]

greetings.each { |greeting| Message.create(greetings: greeting) }
