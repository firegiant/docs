---
title: CloseApplication Element (Util Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Closes applications or schedules a reboot if application cannot be closed.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/fragment/">Fragment</a>, <a href="../../wix/module/">Module</a>, <a href="../../wix/product/">Product</a></dd>
  <dt>Inner Text (xs:string)</dt>
  <dd>               Condition that determines if the application should be closed.  Must be blank or evaluate to true               for the application to be scheduled for closing.             </dd>
  <dt>Children</dt>
  <dd>None</dd>
  <dt>Attributes</dt>
  <dd>
    <table cellspacing="0" cellpadding="0" class="schema">
      <tr>
        <th width="15%">Name</th>
        <th width="15%">Type</th>
        <th width="65%">Description</th>
        <th width="15%">Required</th>
      </tr>
      <tr>
        <td>CloseMessage</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>Optionally sends a close message to the application. Default is no.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>String</td>
        <td>Description to show if application is running and needs to be closed.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ElevatedCloseMessage</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>Optionally sends a close message to the application from deffered action without impersonation. Default is no.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ElevatedEndSessionMessage</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>Sends WM_QUERYENDSESSION then WM_ENDSESSION messages to the application from a deffered action without impersonation. Default is "no".</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>EndSessionMessage</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>Sends WM_QUERYENDSESSION then WM_ENDSESSION messages to the application. Default is "no".</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>String</td>
        <td>Identifier for the close application (primary key). If the Id is not specified, one will be generated.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>PromptToContinue</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>                 When this attribute is set to "yes", the user will be prompted when the application is still running. The Description attribute must contain the message to                 display in the prompt. The prompt occurs before executing any of the other options and gives the options to "Abort", "Retry", or "Ignore". Abort will cancel                 the install. Retry will attempt the check again and if the application is still running, prompt again. "Ignore" will continue and execute any other options                 set on the CloseApplication element. The default is "no".               </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Property</td>
        <td>String</td>
        <td>Property to be set if application is still running. Useful for launch conditions or to conditionalize custom UI to ask user to shut down apps.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RebootPrompt</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>Optionally prompts for reboot if application is still running. The default is "yes". The TerminateProcess attribute must be "no" or not specified if this attribute is "yes".</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Sequence</td>
        <td>Integer</td>
        <td>Optionally orders the applications to be closed.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Target</td>
        <td>String</td>
        <td>Name of the exectuable to be closed.  This should only be the file name.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>TerminateProcess</td>
        <td>Integer</td>
        <td>                 Attempts to terminates process and return the specified exit code if application is still running after sending any requested close and/or end session messages.                 If this attribute is specified, the RebootPrompt attribute must be "no". The default is "no".               </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Timeout</td>
        <td>Integer</td>
        <td>                 Optional time in seconds to wait for the application to exit after the close and/or end session messages. If the application is still running after the timeout then                 the RebootPrompt or TerminateProcess attributes will be considered. The default value is "5" seconds.               </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Util Schema</a>
  </dd>
</dl>
