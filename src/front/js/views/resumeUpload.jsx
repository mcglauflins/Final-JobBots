<Form.Group className="position-relative mb-3">
                <Form.Label>PDF File</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="file"
                  onChange={handleChange}
                  isInvalid={!!errors.file}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.file}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="position-relative mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik106"
                  feedbackTooltip
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>