Sub InsertGuid()
  Dim objTextSelection As TextSelection
  objTextSelection = CType(DTE.ActiveDocument.Selection(), EnvDTE.TextSelection)
  objTextSelection.Text = System.Guid.NewGuid.ToString("D").ToUpperInvariant
End Sub
