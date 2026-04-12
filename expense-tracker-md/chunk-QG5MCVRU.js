import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatProgressBar,
  MatProgressBarModule,
  NgControlStatus,
  NgControlStatusGroup,
  NotificationService,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-GJI3T3AT.js";
import {
  FirebaseService,
  Router
} from "./chunk-YUZIZWBS.js";
import {
  Component,
  __async,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-FGBVFNZK.js";

// src/app/components/login/login.ts
function LoginComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 2);
  }
}
function LoginComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crea un nuovo account ");
  }
}
function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Accedi al tuo account ");
  }
}
function LoginComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email non valida");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimo 6 caratteri");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Registrati ");
  }
}
function LoginComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Accedi ");
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hai gi\xE0 un account? Accedi ");
  }
}
function LoginComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Non hai un account? Registrati ");
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  router;
  notify;
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });
  isSignup = false;
  loading = false;
  constructor(fb, router, notify) {
    this.fb = fb;
    this.router = router;
    this.notify = notify;
  }
  submit() {
    return __async(this, null, function* () {
      if (this.form.invalid) {
        this.notify.show("Compila tutti i campi", "error");
        return;
      }
      const email = this.form.value.email;
      const password = this.form.value.password;
      this.loading = true;
      try {
        if (this.isSignup) {
          yield this.fb.signup(email, password);
          this.notify.show("Account creato con successo!");
        } else {
          yield this.fb.login(email, password);
          this.notify.show("Accesso effettuato!");
        }
        this.router.navigate(["/"]);
      } catch (err) {
        const code = err.code ?? "";
        this.notify.show(this.mapError(code), "error");
      } finally {
        this.loading = false;
      }
    });
  }
  toggleMode() {
    this.isSignup = !this.isSignup;
  }
  mapError(code) {
    switch (code) {
      case "auth/user-not-found":
        return "Utente non trovato";
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Password errata";
      case "auth/email-already-in-use":
        return "Email gi\xE0 in uso";
      case "auth/weak-password":
        return "Password troppo debole (minimo 6 caratteri)";
      case "auth/invalid-email":
        return "Email non valida";
      default:
        return "Errore di autenticazione";
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 30, vars: 9, consts: [[1, "login-container"], [1, "login-card"], ["mode", "indeterminate"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "type", "password", "autocomplete", "current-password"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "full-width", 3, "disabled"], ["align", "end"], ["mat-button", "", 3, "click", "disabled"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1);
      \u0275\u0275conditionalCreate(2, LoginComponent_Conditional_2_Template, 1, 0, "mat-progress-bar", 2);
      \u0275\u0275elementStart(3, "mat-card-header")(4, "mat-card-title");
      \u0275\u0275text(5, "\u{1F4B0} Gestione Spese");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-card-subtitle");
      \u0275\u0275conditionalCreate(7, LoginComponent_Conditional_7_Template, 1, 0)(8, LoginComponent_Conditional_8_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-card-content")(10, "form", 3);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(11, "mat-form-field", 4)(12, "mat-label");
      \u0275\u0275text(13, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 5);
      \u0275\u0275conditionalCreate(15, LoginComponent_Conditional_15_Template, 2, 0, "mat-error")(16, LoginComponent_Conditional_16_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 4)(18, "mat-label");
      \u0275\u0275text(19, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 6);
      \u0275\u0275conditionalCreate(21, LoginComponent_Conditional_21_Template, 2, 0, "mat-error")(22, LoginComponent_Conditional_22_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 7);
      \u0275\u0275conditionalCreate(24, LoginComponent_Conditional_24_Template, 1, 0)(25, LoginComponent_Conditional_25_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "mat-card-actions", 8)(27, "button", 9);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
        return ctx.toggleMode();
      });
      \u0275\u0275conditionalCreate(28, LoginComponent_Conditional_28_Template, 1, 0)(29, LoginComponent_Conditional_29_Template, 1, 0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 2 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isSignup ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.email.hasError("required") ? 15 : ctx.form.controls.email.hasError("email") ? 16 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.form.controls.password.hasError("required") ? 21 : ctx.form.controls.password.hasError("minlength") ? 22 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSignup ? 24 : 25);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSignup ? 28 : 29);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput, MatButtonModule, MatButton, MatProgressBarModule, MatProgressBar], styles: ["\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--mat-sys-primary-container, #d6e3ff) 0%,\n      var(--mat-sys-surface-container-lowest, #fdfcff) 50%,\n      var(--mat-sys-tertiary-container, #ffd8e8) 100%);\n}\n.login-card[_ngcontent-%COMP%] {\n  max-width: 420px;\n  width: 100%;\n  padding: 16px 8px;\n  background: var(--mat-sys-surface, #fdfcff) !important;\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.06) !important;\n}\n.login-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 400;\n  color: var(--mat-sys-on-surface, #1b1b1f);\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      ReactiveFormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatProgressBarModule
    ], template: `<div class="login-container">\r
  <mat-card class="login-card">\r
    @if (loading) {\r
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>\r
    }\r
    <mat-card-header>\r
      <mat-card-title>\u{1F4B0} Gestione Spese</mat-card-title>\r
      <mat-card-subtitle>\r
        @if (isSignup) { Crea un nuovo account } @else { Accedi al tuo account }\r
      </mat-card-subtitle>\r
    </mat-card-header>\r
    <mat-card-content>\r
      <form [formGroup]="form" (ngSubmit)="submit()">\r
        <mat-form-field appearance="outline" class="full-width">\r
          <mat-label>Email</mat-label>\r
          <input matInput formControlName="email" type="email" autocomplete="email">\r
          @if (form.controls.email.hasError('required')) {\r
            <mat-error>Email obbligatoria</mat-error>\r
          } @else if (form.controls.email.hasError('email')) {\r
            <mat-error>Email non valida</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full-width">\r
          <mat-label>Password</mat-label>\r
          <input matInput formControlName="password" type="password" autocomplete="current-password">\r
          @if (form.controls.password.hasError('required')) {\r
            <mat-error>Password obbligatoria</mat-error>\r
          } @else if (form.controls.password.hasError('minlength')) {\r
            <mat-error>Minimo 6 caratteri</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <button mat-flat-button color="primary" type="submit" class="full-width" [disabled]="loading">\r
          @if (isSignup) { Registrati } @else { Accedi }\r
        </button>\r
      </form>\r
    </mat-card-content>\r
    <mat-card-actions align="end">\r
      <button mat-button (click)="toggleMode()" [disabled]="loading">\r
        @if (isSignup) { Hai gi\xE0 un account? Accedi } @else { Non hai un account? Registrati }\r
      </button>\r
    </mat-card-actions>\r
  </mat-card>\r
</div>\r
`, styles: ["/* src/app/components/login/login.css */\n.login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--mat-sys-primary-container, #d6e3ff) 0%,\n      var(--mat-sys-surface-container-lowest, #fdfcff) 50%,\n      var(--mat-sys-tertiary-container, #ffd8e8) 100%);\n}\n.login-card {\n  max-width: 420px;\n  width: 100%;\n  padding: 16px 8px;\n  background: var(--mat-sys-surface, #fdfcff) !important;\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.06) !important;\n}\n.login-title {\n  font-size: 28px;\n  font-weight: 400;\n  color: var(--mat-sys-on-surface, #1b1b1f);\n}\n.full-width {\n  width: 100%;\n}\nmat-form-field {\n  margin-bottom: 16px;\n}\nmat-card-content {\n  padding-top: 24px;\n}\nmat-card-actions {\n  padding-top: 8px;\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], () => [{ type: FirebaseService }, { type: Router }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.ts", lineNumber: 26 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-QG5MCVRU.js.map
