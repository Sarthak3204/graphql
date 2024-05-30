# Suspense

Helps define a fallback component that will be displayed while the component is waiting for some asynchronous operation to complete

# Refetching

Allows re-execute a query to fetch the latest data from the server. Useful when we need to update the UI based on changes that might have occurred since the initial query was executed

Manual Refetching: using refetch() on useQuery
Automatic Refetching: using refetchQueries of useMutation

# Fragments

More maintainable and reusable queries.
By defining reusable pieces of query logic, it keeps queries clean and DRY
