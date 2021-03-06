import { DangerResults } from "../../../dsl/DangerResults"

export const emptyResults: DangerResults = {
  fails: [],
  warnings: [],
  messages: [],
  markdowns: []
}

export const failsResultsWithoutMessages: DangerResults = {
  fails: [{}, {}],
  warnings: [],
  messages: [],
  markdowns: []
}

export const warnResults: DangerResults = {
  fails: [],
  warnings: [{ message: "Warning message" }],
  messages: [],
  markdowns: []
}

export const failsResults: DangerResults = {
  fails: [{ message: "Failing message" }],
  warnings: [],
  messages: [],
  markdowns: []
}

export const summaryResults: DangerResults = {
  fails: [{ message: "Failing message Failing message" }],
  warnings: [{ message: "Warning message Warning message" }],
  messages: [{ message: "message" }],
  markdowns: ["markdown"],
}
