module.exports = function () {
  return {
    transformBundle (code) {
      var wrapped = `
<!DOCTYPE html>
<html>
<head>
<title>---</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
<meta charset=utf-8></head>
<body></body>
<script>
${code}
</script>
</html>`.trim()
      return { code: wrapped, map: { mappings: '' } }
    }
  }
}
