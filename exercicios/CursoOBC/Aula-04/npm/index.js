import { z } from "zod"

const mySchema = z.string()

mySchema.parse("Isaac")
mySchema.parse(42)