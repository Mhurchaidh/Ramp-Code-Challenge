import { Employee } from "./types"

export const EMPTY_EMPLOYEE: Employee = {
  id: "", /*Bug 3: changed id from empty string to "all" to keep error handling for null case --SEE requests.ts--*/
  firstName: "All",
  lastName: "Employees",
}
