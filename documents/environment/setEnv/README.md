# Environment.setEnv()

Specifies environment variables.
The specified variable effects for all maps in application.


```typescript
ionViewDidLoad() {
  Environment.setEnv({

    /*
     * API key for Google Maps JavaScript API v3 for `https:` (on server)
     */
    API_KEY_FOR_BROWSER_RELEASE: "(your API key for particular domain)",

    /*
     * API key for Google Maps JavaScript API v3 for `http:` (local development)
     */
    API_KEY_FOR_BROWSER_DEBUG: "(your API key for localhost)"
  });
}
```
