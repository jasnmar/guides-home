Get-ChildItem -Recurse -Filter *.svg | ForEach-Object {
    $path = $_.FullName
    $content = Get-Content $path -Raw
    $content = $content -replace 'stroke:black', 'stroke:var(--svg-p-stroke, currentColor)'
    $content = $content -replace 'fill:black', 'fill:var(--svg-p-fill, currentColor)'
    $content = $content -replace 'stroke:#E6E6E6', 'stroke:var(--svg-s-stroke, #E6E6E6)'
    $content = $content -replace 'fill:#999999', 'fill:var(--svg-s-fill, #999999)'
    $content = $content -replace 'fill:#E6E6E6', 'fill:var(--svg-t-fill, #E6E6E6)'
    $content = $content -replace 'fill="#000000"', 'fill="currentColor"'
    $content = $content -replace 'stroke="#000000"', 'stroke="currentColor"'
    Set-Content $path $content
    Write-Host "Processed: $path"
}
